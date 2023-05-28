import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

import SearchBar from '@/components/Searchbar'
import { render, screen  } from '@testing-library/react'

it('search bar is typeable', () => {
    render(<SearchBar />)

    userEvent.type(screen.getByTestId('search-bar-id'), 'cool bags')
})