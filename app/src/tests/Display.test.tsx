import React from 'react';
import { render, screen } from '@testing-library/react';
import Display from '../pages/Home/Display';
import { BrowserRouter } from 'react-router-dom';

const mockData = {
    mediaID: 335977,
    mediaType: "movie",
    title: "Indiana Jones and the Dial of Destiny",
    posterPath: "/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
    backdropPath: "/35z8hWuzfFUZQaYog8E9LsXW3iI.jpg",
    overview: "Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
    setImageLoaded: () => console.log("loaded"),
  };

test('renders text and images', () => {
    render(
        <BrowserRouter >
            <Display 
                mediaID={ mockData.mediaID }
                mediaType={ mockData.mediaType }
                title={ mockData.title }
                posterPath={ mockData.posterPath }
                backdropPath={ mockData.backdropPath }
                overview={ mockData.overview }
                setImageLoaded={ mockData.setImageLoaded }
            />
        </BrowserRouter>
    );
    expect(screen.getByRole('title')).toHaveTextContent(mockData.title);
    expect(screen.getByRole('poster')).toBeVisible();
    expect(screen.getByRole('backdrop')).toBeVisible();
});
