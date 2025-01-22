import '@testing-library/jest-dom';

const mockDate = new Date(2020, 1, 1); // Mock date: February 1, 2020

global.Date = jest.fn(() => mockDate);
global.Date.now = jest.fn(() => mockDate.getTime());
