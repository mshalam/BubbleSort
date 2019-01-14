beforeAll(function() {
  // spyOn(window, 'swap').and.callThrough();
});

describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
});

describe('swap count', function() {
  it('counts the swaps', function() {
    spyOn(window, 'swap').and.callThrough();
    bubbleSort([]);
    expect(swap.calls.count()).toEqual(1);
  });
});

describe('Bubble Sort', function() {
  it('handles an unordered array', function() {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
});
