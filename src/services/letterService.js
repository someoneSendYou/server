const letterRepository = require('../repositories/letterRepository');
const crypto = require('crypto')

const createLetter = async (letterInfo) => {
   try {
      let hashId = 0
      while (true) {
         hashId = crypto.randomBytes(10).toString('base64').replace(/\//g, "-");
		 
         if ((await letterRepository.getLetters(hashId))){
            continue
         }
         else{
            letterInfo.hashId = hashId
            break
         }
      }
      if (await letterRepository.createLetter(letterInfo)) {
         return hashId;
      }
      return false;
   } catch (err) {
      console.log(err);
      throw new Error('letterService createLetter Err', err);
   }
};

const getLetters = async (id) => {
   try {
      const letters = await letterRepository.getLetters(id);
      return letters;
   } catch (error) {
      console.log(err);
      throw new Error('letterService createLetter Err', err);
   }
};

module.exports = { createLetter, getLetters };
