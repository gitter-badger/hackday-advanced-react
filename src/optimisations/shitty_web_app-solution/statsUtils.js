import {DateTime} from 'luxon'

export const getNumberOfMoviesPerYear = movies => {
  const years = {}
  movies.forEach(movie => {
    const year = DateTime.fromISO(movie.release_date).year
    if (years[year]) {
      return years[year]++
    }
    years[year] = 1
  })
  const firstYear = Object.keys(years).sort()[0]
  const lastYear = Object.keys(years).sort()[Object.keys(years).length - 1]
  for (let year = firstYear; year < lastYear; ++year) {
    if (!years[year]) {
      years[year] = 0
    }
  }
  return Object.keys(years).map(year => ({
    year,
    number: years[year],
  }))
}
