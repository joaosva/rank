
const MOCK = [
  { id: '1', name: 'Felix', points: 130, avatar: '/avatars/felix.svg', bio: 'Líder do ranking!' },
  { id: '2', name: 'Cristiane', points: 120, avatar: '/avatars/cristiane.svg', bio: 'Forte competidora.' },
  { id: '3', name: 'Vinicius', points: 110, avatar: '/avatars/vinicius.svg', bio: 'Sempre pontuando.' },
  { id: '4', name: 'João Silva', points: 90, avatar: '/avatars/joao.svg', bio: 'Ótimo desempenho.' },
  { id: '5', name: 'Pedro Soares', points: 85, avatar: '/avatars/pedro.svg', bio: 'Bom em eventos.' },
  { id: '6', name: 'Maria', points: 70, avatar: '/avatars/maria.svg', bio: 'Participante ativa.' }
]

export function getRanking() {
  // mock fetch delay
  return new Promise((res) => setTimeout(() => res(MOCK.slice().sort((a,b)=>b.points-a.points)), 200))
}

export function getParticipant(id){
  return new Promise((res) => setTimeout(() => res(MOCK.find(p=>p.id===id)), 100))
}
