import { Assets, canvas, narration, newLabel } from "@drincs/pixi-vn";
import { Spine } from "@drincs/pixi-vn-spine";

const startLabel = newLabel("start", [
    async () => {
        console.log((window as any).PIXI);
        narration.dialogue = { text: `Spine Test` };
    },
    async () => {
        await Assets.loadBundle("spine");
        const spine = new Spine({ atlas: "spineAtlas", skeleton: "spineSkeleton" });
        spine.x = canvas.width / 2;
        spine.y = canvas.height;
        canvas.add("spine", spine);
    },
    async () => {
        const spine = canvas.find<Spine>("spine");
        spine?.state.setAnimation(0, "idle", true);
        narration.dialogue = { text: `Spine animation should be playing` };
    },
    async () => {
        narration.dialogue = { text: `End` };
    },
]);
export default startLabel;
