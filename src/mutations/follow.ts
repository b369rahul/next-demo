export const followCharacter = async ({ id }) => {
  const response = await fetch("/api/follow", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: id }),
  });

  await response.json();
};

export const unFollowCharacter = async ({ id }) => {
  const response = await fetch("/api/follow", {
    method: "Delete",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: id }),
  });

  await response.json();
};