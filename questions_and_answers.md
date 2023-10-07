<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `{}`

<i>Here first a variable named greeting is declared and then an empty object is set as its value and then the greeting is logged to console.log.  Here the output will be an empty object.  Because the empty object is a truthy value the empty object will show as out nothing else.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"`

<i>Here first a function named sum is declared.  which takes two parameters a and b.  Then the sum of the two parameters is returned from inside the function.  Now when the function is called it is given 1 and "2" as parameters.  Here 1 is number type and 2 is string type.  Which will communicate 12.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>Here food means an array declared.  Out of which there are 4 values.  Then an object called info is declared and its favoriteFood key value is set to the value of 0 index of food.  Then the value of favoriteFood key of info objects is changed.  Then the food is console.log.  The point here is that the value of the food array will not change.  Because food is an array and info is an object whose favoriteFood key value is changed, which is not related to the food array</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>Here first a function named sayHi is declared and it has a parameter name name which is returned by connecting Hi there from inside the function.  That is, when the function is called, the parameter given will be shown after Hi there.
 But later when sayHi console.log is not given any parameter, the output shows Hi there, undefined.  Because not giving any parameter will show undefined instead of name.  That is, the parameter is not defined.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>Here a variable called count is declared with an initial value of 0.  Then an array named num is declared with length 4.
 Now forEach is map to the num array.  Since length of num is 4, map runs 4 times.  The condition inside map is that if the value of num is truty then the value of count will be incremented by 1.  Here the value of num is truty except 0.  That is map will run 4 times and condition will be true 3 times resulting in value of count will be 3.</i>

</p>
</details>
