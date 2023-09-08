import React from 'react';
import { render, screen } from '@testing-library/react';
import SidebarItem from '../pages/Home/SidebarItem';
import { BrowserRouter } from 'react-router-dom';

const mockData = {
    mediaID: 335977,
    mediaType: "movie",
    title: "Indiana Jones and the Dial of Destiny",
    posterPath: "/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
    overview: "Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
}

test('renders text and poster', () => {
    render(
        <BrowserRouter>
            <SidebarItem 
                mediaID={ mockData.mediaID }
                mediaType={ mockData.mediaType } 
                title={ mockData.title } 
                posterPath={ mockData.posterPath }
                overview={ mockData.overview } 
            />
        </BrowserRouter>
    )
    expect(screen.getByRole('title')).toHaveTextContent(mockData.title);
    expect(screen.getByRole("poster")).toBeVisible();
});