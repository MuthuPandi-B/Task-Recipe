import recipes from "../Models/recipeSchema.js";

//create / post method

export const createrecipe = async (req, res) => {
  try {
    const newrecipe = new recipes(req.body); // req.body and assigning in a single line
    await newrecipe.save(); //saving the deatils in mongodb
    res
      .status(200)
      .json({ message: "recipe added Successfully", data: newrecipe });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// get all method

export const getAllrecipes = async (req, res) => {
  try {
    const getrecipe = await recipes.find();
    res
      .status(200)
      .json({ message: "recipes retrieved successfully", data: getrecipe });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//get by id method
export const getrecipeById = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const recipe = await recipes.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: "recipe Not Found" });
    }
    res
      .status(200)
      .json({ message: "recipe retrieved successfully", data: recipe });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// update method

export const updaterecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;
    const { name,description,duration,ingredients} = req.body;
    const result = await recipes.findByIdAndUpdate(
      { _id: recipeId },
      { name,description,duration,ingredients },
      {new:true},
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "recipe Not Found" });
    }
    res.status(200).json({ message: "recipe Updated", data: result });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

//delete method

export const deleterecipe = async(req,res)=>{

    try {
        const recipeId = req.params.id;
        const result = await recipes.findByIdAndDelete({_id:recipeId}) 
        if(!result){
            return res.status(404).json({ message: "recipe Not Found" });
        } 
        const recipe = await recipes.find();
        res.status(200).json({message:"recipe deleted", data:recipe})
        
    } catch (error) {
        res.status(500).json({
            message: error.message,
          });
    }
}