import { client } from "@gql/config";
import type { ObtainJsonWebToken, MutationTokenAuthArgs } from "@gql/codegen/graphql";
import { LOGIN } from "@gql/queries/Mutations";

export async function adminLogin({
  email,
  password
}: {
  email: string;
  password: string;
}): Promise<ObtainJsonWebToken> {
  const data = await client.mutate<{ tokenAuth: ObtainJsonWebToken }, MutationTokenAuthArgs>({
    mutation: LOGIN,
    variables: {
      email,
      password
    }
  });
  return data.data?.tokenAuth as ObtainJsonWebToken;
}
