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