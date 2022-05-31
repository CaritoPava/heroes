import { useNavigate, useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { useMemo } from 'react'
import { useForm } from '../../hooks/useForm.js'
import { heroesByName } from '../../selectors/heroesByName'
import { HeroCard } from '../hero/HeroCard'

export const SearchScreen = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { q = '' } = queryString.parse(location.search)
  const [formValues, hadleInputChange] = useForm({
    searchText: q,
  })
  const { searchText } = formValues

  const heroesFileted = useMemo(() => heroesByName(q), [q])
  const handleSearch = (e) => {
    e.preventDefault()
    console.log(searchText)
    navigate(`?q=${searchText}`)
  }
  return (
    <>
      <h1>Búsquedas</h1>
      <hr />
      <div className="col-5">
        <h4>Buscar</h4>
        <hr />
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar heroe"
            className="form-control"
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={hadleInputChange}
          />
        </form>
        <button
          className="btn btn-outline-primary mt-1 "
          type="submit"
        >
          Buscar...
        </button>

      </div>
      <div className='col-7'>
        <h4>Resultados</h4>
        <hr />
        {
          (q === '')
            ?
            <div className='alert alert-info'>Buscar un héroe</div>
            :
            (heroesFileted.length === 0)
            &&
            <div className='alert alert-danger'>No hay resultados :{q}</div>
        }
        {
          heroesFileted.map(hero => (
            <HeroCard
              key={hero.id}
              {...hero}
            />

          ))
        }
      </div>
    </>
  )
}
