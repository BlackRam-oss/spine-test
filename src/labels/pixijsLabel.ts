import { canvas, narration, newLabel } from "@drincs/pixi-vn";
import { Spine } from "@drincs/pixi-vn-spine/core";
import { Assets, default as PIXI } from "@drincs/pixi-vn/pixi.js";

export const app = async () => {
    // Load the bunny texture
    Assets.add({
        alias: "skeleton-data",
        src: "https://raw.githubusercontent.com/DRincs-Productions/pixi-vn-bucket/refs/heads/main/spine/zqx_tachie.skel",
    });
    Assets.add({
        alias: "skeleton-atlas",
        src: "https://raw.githubusercontent.com/DRincs-Productions/pixi-vn-bucket/refs/heads/main/spine/zqx_tachie.atlas",
    });
    await Assets.load(["skeleton-data", "skeleton-atlas"]);

    const spineCore = Spine.from({ atlas: "skeleton-atlas", skeleton: "skeleton-data" });
    const { skeleton, parent, ...props } = spineCore;
    const spine = new Spine({
        skeletonData: skeleton.data,
        ...props,
    });
    console.log("spine", spineCore);
    console.log(PIXI.VERSION);
    console.log(spineCore instanceof PIXI.ViewContainer);
    canvas.app.stage.addChild(spineCore);
};

const pixijsLabel = newLabel("pixijsLabel", [
    async () => {
        narration.dialogue = { text: `Spine (PixiJS) Test` };
    },
    app,
]);
export default pixijsLabel;
