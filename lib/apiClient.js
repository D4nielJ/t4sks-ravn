import { useQuery } from 'react-query';
import { GraphQLClient, gql } from 'graphql-request';

const endpoint = 'https://syn-api-prod.herokuapp.com/graphql';

const headers = {
  Accept: '*/*',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwb3NpdGlvbklkIjoiOTNhNTk5YTFkMmQ4IiwicHJvamVjdElkIjoiZGIzOTdhNmUtZGM5NS00NmZhLWFlMWUtMzE5YTYyZWI5Y2I4IiwiZnVsbE5hbWUiOiJEYW5pZWwgSmFyYW1pbGxvIiwiZW1haWwiOiJkNG5pZWwuZGptQGdtYWlsLmNvbSIsImlhdCI6MTY0Njc1MzEzOH0.Vp8wEyAKuRrqciZDlIn-sHh_240IGoZgRZ4ZaDBmrbw',
  'Content-Type': 'application/json',
};

const variables = {
  id: 'd923f8f3-49d8-4edb-9738-929eea1dccec',
};

const client = new GraphQLClient(endpoint, { headers });

export const useGetTasks = () => {
  const query = gql`
    query getUserTasks($id: String) {
      tasks(input: { ownerId: $id }) {
        assignee {
          avatar
        }
        createdAt
        creator {
          avatar
        }
        dueDate
        id
        name
        pointEstimate
        position
        status
        tags
      }
    }
  `;

  return useQuery('tasks', async () => {
    const { tasks: data } = await client.request(query, variables);
    return data;
  });
};

export default client;
