import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import Mission from '../screens/Mission/Mission';

describe('Missions Screen', () => {
  test('render all missions', () => {
    const mission = render(
      <React.StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Mission />
          </BrowserRouter>
        </Provider>
      </React.StrictMode>,
    );
    expect(mission).toMatchSnapshot();
  });
});
