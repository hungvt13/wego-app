import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';

import App from './App';

describe('App', () => {
  beforeEach(() => {
    vi.mock('../../hooks/useFood', async () => {
      const actual = await vi.importActual('../../hooks/useFood');
      return {
        ...actual,
        default: () => ({
          search: '',
          handleSearchChange: () => {},
          isPageLoading: false,
          isLoadingCategory: false,
          isLoadingList: false,
          categoryData: [
            { id: 1, name: 'Sushi'},
            { id: 2, name: 'Pizza'}
          ],
          handleClickCategory: () => {},
          foodListData: [
            {
              'id': '628b5decc94a27754f30e6f1',
              'title': 'Niquent Drinks',
              'categoryId': '6288a89fac9e970731bfaa7b',
              'iconType': 'gift',
              'img': 'https://source.unsplash.com/random/400x400?Drinks',
              'tags': [
                  {
                      'type': 'rating',
                      'content': 3.9508
                  },
                  {
                      'type': 'time',
                      'content': '80-100'
                  }
              ],
            },
            {
              'id': '628b5dec6678e96d75f2f7de',
              'title': 'Quinex Sushi',
              'categoryId': '6288a89f1f0152b8c2cd512b',
              'iconType': null,
              'img': 'https://source.unsplash.com/random/400x400?Sushi',
              'tags': [
                  {
                      'type': 'rating',
                      'content': 3.4518
                  },
                  {
                      'type': 'time',
                      'content': '100-120'
                  },
                  {
                      'type': 'new'
                  }
              ]
            }
          ],
          isMoreItems: true,
          handleShowMore: () => {},
        })
      };
    });

    render(<App />);
  });

  it('should show category', () => {
    const tabs = screen.queryAllByTestId('category-tab');

    // should have correct length
    expect(tabs.length).toBe(3);

    // display correct items
    expect(tabs[0]).toHaveTextContent('All');
    expect(tabs[1]).toHaveTextContent('Sushi');
    expect(tabs[2]).toHaveTextContent('Pizza');

    expect(tabs[0]).toHaveClass('active');
    expect(tabs[1]).not.toHaveClass('active');
    expect(tabs[2]).not.toHaveClass('active');

    // check switch tab
    fireEvent(tabs[1], new MouseEvent('click', { bubbles: true }));
    expect(tabs[0]).not.toHaveClass('active');
    expect(tabs[1]).toHaveClass('active');
  });

  it('should show restaurant card', () => {
    const cards = screen.queryAllByTestId('retaurant-cards-item');

    // should have correct length
    expect(cards.length).toBe(2);

    expect(cards[0]).toHaveTextContent('Niquent Drinks');
    expect(cards[1]).toHaveTextContent('Quinex Sushi');
    expect(cards[1]).toHaveTextContent('New');
  });

  it('should show ShowMore Button', () => {
    expect(screen.getByTestId('show-more-btn')).toBeInTheDocument();
  });  
});
