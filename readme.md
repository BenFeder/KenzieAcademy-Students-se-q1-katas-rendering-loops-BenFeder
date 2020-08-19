# Katas - Rendering Loops

Create a single web page, with a labelled heading for each individual kata followed by your solution.

For these katas, instead of using `console.log()` or `document.write()`, you are required to insert your results into the HTML using the `document.createElement()` and ` node.``appendChild``() ` methods. You are NOT to hardcode (i.e. explicitly without any logic; not dynamically) any solutions.

Your functions should be named kata1(), kata2(), kata3(), etc.

The easiest way to get started is by copying the example file from Mini-Lesson: Inserting new Elements within a Page. You can copy and paste from the code embedded in the lesson.

You can keep adding each new kata onto the bottom of that page.
Several of the katas will use the following sample array, which is provided in the starter code:

```
const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
```

## Katas

1. Display the numbers from 1 to 25: (1, 2, 3, …, 24, 25)
2. Display the numbers from 25 to 1: (25, 24, 23, …, 2, 1)
3. Display the numbers from -1 to -25: (-1, -2, -3, …, -24, -25)
4. Display the numbers from -25 to -1: (-25, -24, -23, …, -2, -1)
5. Display the odd numbers from 25 to -25: (25, 23, 21, …, -23, -25)
6. Display the numbers divisible by 3 up through 100: (3, 6, 9, …, 96, 99)
7. Display the numbers divisible by 7 up through 100: (7, 14, 21, …, 91, 98)
8. Display the numbers divisible by 3 along with the numbers divisible by 7 down from 100: (99, 98, 96, 93, 91, …, 14, 12, 9, 7, 6, 3)
9. Display the odd numbers divisible by 5 up through 100: (5, 15, 25, …, 85, 95)
10. Display the 20 elements of sampleArray. (469, 755, 244, …, 940, 472)
11. Display all the even numbers contained in sampleArray. (244, 758, 450, …, 940, 472)
12. Display all the odd numbers contained in sampleArray. (469, 755, 245, …, 179, 535)
13. Display the numbers divisible by 8 in sampleArray: (712, 456, …, 472)
14. Display the square of each element in sampleArray. (219961, 570025, …, 222784)
15. Display the sum of all the numbers from 1 to 20.
16. Display the sum of all the elements in sampleArray.
17. Display the smallest element in sampleArray.
18. Display the largest element in sampleArray.

NOTE: Do not hardcode the solutions

Hint: What does it mean to be divisible by a number?
Think back to the remainder operator % 
Go re-read the lesson on Numbers to review the Remainder Operator.


## Bonus
If you would like an additional challenge, try completing each of the above again without using any `for` or `while` loops.

#### Optional Bonus (5 points)
These problems involve the use of CSS styling, and require a background knowledge in CSS to complete. We'll cover this later, but feel free to do some independent research if you would like to earn some extra points!

19. Display 20 solid gray rectangles, each 20px high and 100px wide.
20. Display 20 solid gray rectangles, each 20px high, with widths increasing by multiples of 5 (105px, 110px, …, 200px).
21. Display 20 solid gray rectangles, each 20px high, with widths in pixels given by the 20 elements of sampleArray.
22. As in #21, but alternate colors so that every other rectangle is red.
23. As in #21, but color the rectangles with even widths red.
