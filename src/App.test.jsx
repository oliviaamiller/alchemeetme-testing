import { render, screen } from '@testing-library/react'
import App from './App'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

describe('first', () => {
  it('Should render the header', async () => {
    render(<App user={user} />)

    const alt = screen.getByAltText('Alchemy Logo')

    const name = await screen.findByText('Vonta')

    expect(alt).toBeInTheDocument()
    expect(name).toBeInTheDocument()
  })
})
