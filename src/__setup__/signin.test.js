import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'

import SignIn from '../pages/sign-in'
import { render, screen  } from '@testing-library/react'

it('input field is typeable', () => {
    render(<SignIn />)

    userEvent.type(screen.getByLabelText('Email'), 'AfsinTripto@gmail.com')
})