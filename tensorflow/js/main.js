let numberArray = [];
for (var i = 0; i < 15 ; i++) {
 numberArray[i] = Math.random() * 100;
}
const shapeA = [5,3];
const shapeB = [3,5];

const a = tf.tensor(numberArray, shapeA, "int32");
const b = tf.tensor(numberArray, shapeB, "int32");

const c = a.matMul(b);
c.print();
