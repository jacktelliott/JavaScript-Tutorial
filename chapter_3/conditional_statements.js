//if statements
const age = 20;

if (age > 20) {
    console.log('over 20 years old')
} else if (age < 20) {
    console.log('under 20 years old')
} else {
    console.log('20 years old')
}

//switch statements
const grade = 'C';

switch (grade) {
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got a B!');
        break;
    case 'C':
        console.log('you got a C!');
        break;
    case 'D':
        console.log('you got a D!');
        break;
    case 'F':
        console.log('you got an F!');
        break;
    default:
        console.log('not a valid grade.');
}