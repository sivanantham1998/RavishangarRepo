let mark=50;

switch (true) {
    case (mark >=90) && (mark <=100):
        console.log('Grade A+')
        break;
    case (mark >=70) && (mark <=89):
        console.log("Grade A");
        break;
    case mark<=50:
        console.log('Fail');
        break;
    default:
        console.log('This is error');
        break;
}