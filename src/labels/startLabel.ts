import {
    narration,
    newLabel,
    showImageContainer
} from "@drincs/pixi-vn";
import { james } from "../values/characters";

const startLabel = newLabel(
    "start",
    [
        async () => {
            narration.dialogue = { text: `Spine Test` };
        },
        async () => {
            await showImageContainer("james", ["m01-body", "m01-eyes-grin", "m01-mouth-smile01"]);
            narration.dialogue = {
                character: james,
                text: `Don't worry, you don't have much to live up to. Just don't use heroin like the last guy, and you'll be fine!`,
            };
        },
    ]
);
export default startLabel;
