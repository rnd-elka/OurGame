//global variables
scope=0;
currentQuestionIndex=0;


//פונקציה שמקבלת מערך של תשובות ואינדקס ל התשובה הנכונה ומחזירה את התשובה הנכונה
function GetTrueAnswer(arrAnswers,index){
    return arrAnswers[index];
}


//פונקציה שמדמה העתק הדבק
function copy(copyText) {
    //בחירת הטקסט
    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
   //מעתיק את הטקסט לשדה 
    navigator.clipboard.writeText(copyText.value);
    
    //הודעת אלרט שהקובץ הועתק
    alert("Copied the text: " + copyText.value);
  }