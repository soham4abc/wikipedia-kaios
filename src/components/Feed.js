import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'
import { ListView } from 'components'
import { useI18n } from 'hooks'
import { getTrendingArticles } from 'api'
import { getUserCountry } from 'utils'

export const Feed = ({ lang, isExpanded, setIsExpanded, lastIndex, setNavigation, containerRef }) => {
  const [trendingArticles, setTrendingArticles] = useState([])
  const i18n = useI18n()
  const userCountry = getUserCountry()

  useEffect(() => {
    const [request, abort] = getTrendingArticles(lang, userCountry)
    request.then(setTrendingArticles)
    return abort
  }, [lang, userCountry])

  useEffect(() => {
    if (lastIndex) {
      setIsExpanded(true)
      setNavigation(lastIndex)
    }
  }, [trendingArticles])

  return (
    <div class={`feed ${isExpanded ? 'expanded' : 'collapsed'}`}>
      {!isExpanded && <div class='cue' />}
      <ListView items={trendingArticles} header={i18n('feed-header')} containerRef={containerRef} />
    </div>
  )
}