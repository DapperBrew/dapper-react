// action constants
export const SET_ORIGINAL_GRAVITY = 'SET_ORIGINAL_GRAVITY';
export const SET_FINAL_GRAVITY = 'SET_FINAL_GRAVITY';

export const setOriginalGravity = gravity => ({
  type: SET_ORIGINAL_GRAVITY,
  gravity,
});

export const setFinalGravity = gravity => ({
  type: SET_FINAL_GRAVITY,
  gravity,
});
