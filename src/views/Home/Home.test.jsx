import { render, screen } from '@testing-library/react';
import Home from './Home';

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
};

describe('profile', () => {
  it('Should render the user profile', async () => {
    render(<Home user={user} />);

    const name = await screen.findByText('Vonta');
    const motto = await screen.findByText('Res Non Verba');
    const interestsHeading = await screen.findByText('Interests');
    const avatar = screen.getByAltText('avatar');
    const headerImg = screen.getByAltText('header');
    const likesArray = await screen.findAllByText(['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games']);

    

    expect(name).toBeInTheDocument();
    expect(motto).toBeInTheDocument();
    expect(interestsHeading).toBeInTheDocument();
    expect(avatar).toBeInTheDocument();
    expect(headerImg).toBeInTheDocument();
    expect(likesArray).toBeInTheDocument();
  });
});
