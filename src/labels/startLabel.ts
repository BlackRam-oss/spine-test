import { Assets, canvas, newLabel } from "@drincs/pixi-vn";
import { Spine } from "@drincs/pixi-vn-spine";

const startLabel = newLabel("start", [
    // async () => {
    //     await Assets.loadBundle("spine");
    //     const spine = new Spine({ atlas: "spineAtlas", skeleton: "spineSkeleton", xAlign: 0.5, yAlign: 1 });
    //     spine.addAnimation("idle", { loop: true });
    //     canvas.add("spine", spine);
    // },
    // async () => {
    //     await Assets.loadBundle("spine");
    //     const spine = new Spine({ atlas: "spineAtlas", skeleton: "spineSkeleton", xAlign: 0, yAlign: 1 });
    //     spine.addAnimation("walk", { loop: true });
    //     canvas.add("spine", spine);
    //     canvas.animate(
    //         spine,
    //         [
    //             [{ xAlign: 1 }, { duration: 1, ease: "linear" }],
    //             [{ scaleX: -1 }, { duration: 0.2 }],
    //             [{ xAlign: 0 }, { duration: 1, ease: "linear" }],
    //             [{ scaleX: 1 }, { duration: 0.2 }],
    //         ],
    //         { repeat: Infinity },
    //     );
    // },
    async () => {
        await Assets.loadBundle("spine");
        const spine = new Spine({ atlas: "spineAtlas", skeleton: "spineSkeleton", xAlign: 0.5, yAlign: 1 });
        spine.playSequence(
            [
                ["idle", { loop: true, duration: 2 }],
                ["jump", { duration: 1 }],
            ],
            {
                repeat: Infinity,
            },
        );
        canvas.add("spine", spine);
    },
]);
export default startLabel;
