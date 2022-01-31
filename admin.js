function renderCard(doc){
    var insertq=document.createElement("label");
    insertq.innerHTML="הכנס שאלה";
    
    var inputq=document.createElement("input");
    inputq.type="text";
    var inserta=document.createElement("label");
    inserta.innerHTML="הכנס 3 תשובות";
    var inputa1=document.createElement("input");
    inputa1.type="text";
    var inputa2=document.createElement("input");
    inputa2.type="text";
    var inputa3=document.createElement("input");
    inputa3.type="text";
    var inputcorrect=document.createElement("input");
    inputcorrect.type="number";
    doc.appendChild(insertq);
    doc.appendChild(inputq);
    doc.appendChild(inserta);
    doc.appendChild(inputa1);
    doc.appendChild(inputa2);
    doc.appendChild(inputa3);
    doc.appendChild(inputcorrect);

}