# Subtle Type Coercion Bug in JavaScript

This repository demonstrates a common, yet easily missed, bug in JavaScript related to type coercion and the handling of null or undefined values in functions.  The bug arises from the use of strict equality (`===`) without explicitly checking for `undefined`.

## The Bug

The `foo` function intends to add two numbers. However, it only handles `null` explicitly. If either `a` or `b` is `undefined`, it still returns `null` instead of throwing an error or returning `NaN`, leading to potential unexpected behavior.

## The Solution

The solution demonstrates a more robust approach by using a combination of checks for `null` and `undefined` which gives better results and error handling in the case where either parameter is null or undefined.