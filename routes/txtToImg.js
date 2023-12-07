const express = require("express");
const router = express.Router();
const { DiffusionPipeline } = require("@huggingface/inference");

const modelId = "stabilityai/stable-diffusion-2";
const hfAccessToken = "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";

// Endpoint to generate images
router.post("/", async (req, res) => {
  try {
    // Create an instance of the DiffusionPipeline directly
    const model = new DiffusionPipeline(modelId, { accessToken: hfAccessToken });

    // Extract input text from the request body
    const { text } = req.body;

    // Generate image based on input text
    const parameters = { negative_prompt: "Your negative prompt here" };
    const result = await model.textToImage({ inputs: text, parameters });

    console.log(result);
    // Send the generated image in the response
    res.set("Content-Type", "image/png"); // Set the content type as per your generated image type
    res.send(Buffer.from(result)); // Assuming the result is a Buffer representing the image
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Failed to generate image" });
  }
});

module.exports = router;
