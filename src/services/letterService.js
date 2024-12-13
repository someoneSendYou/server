const letterRepository = require('../repositories/letterRepository');

const createLetter = async (letterInfo) => {
   try {
      if (await letterRepository.createLetter(letterInfo)) {
         return true;
      }
      return false;
   } catch (err) {
      console.log(err);
      throw new Error('letterService createLetter Err', err);
   }
};

const getLetters = async (letterKey) => {
   try {
      const letters = await letterRepository.getLetters(letterKey);
      return letters;
   } catch (error) {
      console.log(err);
      throw new Error('letterService createLetter Err', err);
   }
};

module.exports = { createLetter, getLetters };
