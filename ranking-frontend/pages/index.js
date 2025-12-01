
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
import { getRanking } from '../lib/mockApi'
import Image from 'next/image'

export default function Home() {
  const { data: ranking } = useQuery(['ranking'], getRanking, { initialData: [] })
  const top = ranking.slice(0,3)
  const others = ranking.slice(3,6)

  return (
    <div className="page">
      <div className="container">
        <h1>Ranking Geral</h1>

        <div className="toggle">
          <button className="active">Semanal</button>
          <button>Mensal</button>
        </div>

        <div className="podium">
          <div className="podium-item small">
            <img src={top[1]?.avatar} alt="" className="avatar"/>
            <h3>{top[1]?.name}</h3>
            <p className="pts">{top[1]?.points} pts</p>
            <div className="bar rank2">2</div>
          </div>

          <div className="podium-item main">
            <img src={top[0]?.avatar} alt="" className="avatar large"/>
            <h3>{top[0]?.name}</h3>
            <p className="pts">{top[0]?.points} pts</p>
            <div className="bar rank1">1</div>
          </div>

          <div className="podium-item small">
            <img src={top[2]?.avatar} alt="" className="avatar"/>
            <h3>{top[2]?.name}</h3>
            <p className="pts">{top[2]?.points} pts</p>
            <div className="bar rank3">3</div>
          </div>
        </div>

        <div className="list-card">
          {others.map((p, idx) => (
            <Link key={p.id} href={`/participants/${p.id}`}>
              <a className="list-row">
                <div className="badge">{idx+4}</div>
                <img src={p.avatar} className="list-avatar" />
                <div className="list-info">
                  <strong>{p.name}</strong>
                  <span>{p.points} pontos</span>
                </div>
              </a>
            </Link>
          ))}
        </div>

      </div>

      <nav className="bottom-nav">
        <a>🏠</a>
        <a>🏆</a>
        <a>📚</a>
        <a>👤</a>
      </nav>
    </div>
  )
}
