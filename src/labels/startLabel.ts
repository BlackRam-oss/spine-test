import { Assets, canvas, narration, newLabel } from "@drincs/pixi-vn";
import { newSpine } from "@drincs/pixi-vn-spine";

const startLabel = newLabel("start", [
    async () => {
        console.log((window as any).PIXI);
        narration.dialogue = { text: `Spine Test` };
    },
    async () => {
        await Assets.loadBundle("spine");
        const spine = newSpine({ atlas: "spineAtlas", skeleton: "spineSkeleton" });
        spine.x = canvas.width / 2;
        spine.y = canvas.height;
        console.log("spine", spine);
        canvas.add("spine", spine);
    },
    async () => {
        narration.dialogue = { text: `End` };
    },
]);
export default startLabel;
