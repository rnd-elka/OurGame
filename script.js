
//global variables
scope=0;
currentQuestionIndex=0;


//פונקציה שמקבלת מערך של תשובות ואינדקס ל התשובה הנכונה ומחזירה את התשובה הנכונה
function GetTrueAnswer(arrAnswers,index){
    return arrAnswers[index];
}


//פונקציה שמקבלת מספר נקודות נוכחיומספר נקודות להורדה
//ומחזירה את מספר הנקודות המעודכן
const downScore=(globalScore,downer)=>{
    return globalScore-downer;
}


//פונקציה שמדמה העתק הדבק
function copy(copyText) {
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    
    /* Alert the copied text */
    alert("Copied the text: " + copyText.value);
  }


function getCurrentQuestions (arrQuestions,index){
    return arrQuestions[index];
}

// פונקציה שמעבירה לשאלה הבאה 
function GetNextQuastion(){
    currentQuestionIndex++;
    getCurrentQuestions(currentQuestionIndex);
}