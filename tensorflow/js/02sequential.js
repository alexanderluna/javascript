console.log("***** 02 Sequential *****");
const model = tf.sequential();
const hidden = tf.layers.dense({units: 4, inputShape: [2], activation: "sigmoid"});
const output = tf.layers.dense({units: 3, activation: "sigmoid"});

model.add(hidden);
model.add(output);

model.compile({optimizer: tf.train.sgd(0.1), loss: "meanSquaredError"});
(something) => {
  console.log(something); 
  
}
