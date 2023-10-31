import React from 'react'
import { render, screen } from '@testing-library/react'
import { Hero } from 'components/home/hero/Hero';
import Main from 'pages';



describe('Main component', () => {
    it('should render correctly', () => {
        render(<Main/>)
        
    })
})