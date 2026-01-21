import {
    canvas,
    narration,
    newLabel
} from "@drincs/pixi-vn";
import {
    newSpine
} from "@drincs/pixi-vn-spine";

const startLabel = newLabel(
    "start",
    [
        async () => {
            narration.dialogue = { text: `Spine Test` };
        },
        async () => {
            const spine = newSpine({atlas:"skeleton-atlas", skeleton: "skeleton-data"})
            canvas.add("spine",spine )
        },
    ]
);
export default startLabel;
