function soultion(graph, start) {
  // 그래프 인접리스트로 변환
  const adList = {};
  // u랑 v는 노드이다.
  graph.forEach([u, v]) => {
    if(!adList[u]) adList[u] = [];
    adList[u].push(v);
  }
}

// DFS 탐색 함수
function dfs(node, visited, result) {
    visited.add(node); // 현재 노드를 방문한 노드들의 집합 추가
    result.push(node); // 현재 노드를 결과 배열에 추가
    (adList[node]||[]).forEach(neighbor) => {
        if(!visited.has(neighbor)) {
            dfs(neighbor, visited, result);
        }
    });
}
