
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { getParticipant } from '../../lib/mockApi'
import Link from 'next/link'

export default function Participant() {
  const router = useRouter()
  const { id } = router.query
  const { data: person } = useQuery(['participant', id], () => getParticipant(id), { enabled: !!id })

  if (!person) return <div className="page"><div className="container">Carregando...</div></div>

  return (
    <div className="page">
      <div className="container small">
        <Link href="/"><a className="back">← Voltar</a></Link>
        <div className="person-card">
          <img src={person.avatar} className="avatar large"/>
          <h2>{person.name}</h2>
          <p><strong>{person.points}</strong> pontos</p>
          <p>{person.bio}</p>
        </div>
      </div>
    </div>
  )
}
