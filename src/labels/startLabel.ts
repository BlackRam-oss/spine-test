import { Assets, canvas, narration, newLabel } from "@drincs/pixi-vn";
import { Spine } from "@drincs/pixi-vn-spine";

const startLabel = newLabel("start", [
    async () => {
        await Assets.load(["spineboySkeleton", "spineboyAtlas"]);
        const spine = new Spine({
            skeleton: "spineboySkeleton",
            atlas: "spineboyAtlas",
        });
        spine.align = { x: 0.5, y: 1 };
        canvas.add("spine", spine);
        spine.addAnimation("idle", {
            loop: true,
            completeOnContinue: false,
        });
        spine.addAnimation("jump", {
            delay: 0.5,
        });
    },
    async () => {
        const spine = canvas.find<Spine>("spine");
        spine?.playSequence(
            [
                [
                    "jump",
                    {
                        duration: 5,
                    },
                ],
                [
                    "walk",
                    {
                        duration: 9,
                    },
                ],
            ],
            {
                repeat: 3,
                repeatType: "loop",
            },
        );
        narration.dialogue = { text: `Spine animation should be playing` };
    },
    async () => {
        narration.dialogue = { text: `End` };
    },
]);
export default startLabel;
