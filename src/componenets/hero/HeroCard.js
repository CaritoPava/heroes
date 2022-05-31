import { Link } from "react-router-dom"
import { heroImages } from "../../helpers/heroImages"


export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters
}) => {
  // const imagePath = `assets/${id}.jpg`

  return (
    <div className='col animate__animated animate__fadeIn'>
      <div className='card mb-3'>
        <div className='row g-10'>
          <div className='col-4'>
            <img src={heroImages(`./${id}.jpg`)} className="img img-responsive" alt={superhero} />
          </div>
          <div className="col-md-50">
            <div className='card-body'>
              <h5 className='profile-name'>{superhero}</h5>
              <p className='profile-position'>{alter_ego}</p>
              {(alter_ego !== characters) && <p className='text-muted'>{characters}</p>}
              <p className='text-muted'>{first_appearance}</p>
              <Link to={`/hero/${id}`}>
                Más...
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
