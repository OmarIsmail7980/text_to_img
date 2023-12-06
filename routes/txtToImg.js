const express = require("express");
const router = express.Router();
const { DiffusionPipeline } = require("@huggingface/inference");

const modelId = "stabilityai/stable-diffusion-2";
const hfAccessToken = "<YOUR_ACCESS_TOKEN>";




router.post("/", async (req, res) => {
  try {
    const model = await DiffusionPipeline.from_pretrained(modelId, {
        accessToken: hfAccessToken,
      });

      const inputs = "your input text here";
      const parameters = { negative_prompt: "your negative prompt here" };

      const result = await model.textToImage({ inputs, parameters });

        console.log(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;





