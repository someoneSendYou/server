const db = require('../models');

const createLetter = async (letterInfo) => {
   try {
      await db.Letter.create({
         title: letterInfo.title,
         comment: letterInfo.comment,
         hashId: letterInfo.hashId,
         templete_id: letterInfo.templete_id,
		 imgPath: letterInfo.imgPath
      });
      return true;
   } catch (err) {
      console.log(err);
      throw new Error('letterRepository crateLetter Err', err);
   }
};

const getLetters = async (id) => {
   try {
      const letters = await db.Letter.findOne({
         where: {
            hashId: id,
         },
      });
      return letters;
   } catch (err) {
      console.log(err);
      throw new Error('letterRepository crateLetter Err', err);
   }
};


module.exports = { createLetter, getLetters };
