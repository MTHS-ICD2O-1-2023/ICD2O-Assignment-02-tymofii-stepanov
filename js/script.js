// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Tymofii
// Created on: Sep 2020
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates Perimeter of a triangle.
 */
function calculatePerimeterOfTriangle() {
  // input
  const baseOfTriangle = parseInt(document.getElementById('base-of-triangle').value)
  const firstSide = parseInt(document.getElementById('first-side').value)
  const secondSide = parseInt(document.getElementById('second-side').value)


  // process
  const perimeterOfTriangle = baseOfTriangle + firstSide + secondSide

  // output
  document.getElementById('perimeter').innerHTML = 'Area is: ' + perimeterOfTriangle + ' cm'
}
