import {
	AppShell,
	NavLink as MNavLink,
	Button,
	Container,
	Flex,
	TextInput,
} from "@mantine/core";
import type { MetaFunction } from "@remix-run/node";
import { Link, NavLink } from "@remix-run/react";

export const meta: MetaFunction = () => [{ title: "Remix Notes" }];
export default function Index() {
	return (
		<AppShell header={{ height: 60 }} padding="md">
			<AppShell.Main>
				<Container size="xs">
					<Flex
						direction={{
							base: "column",
							sm: "row",
							md: "column-reverse",
						}}
						gap={{ base: "sm", sm: "lg" }}
						justify={{ sm: "center" }}
					>
						<Button
							color="primary"
							variant="light"
							renderRoot={(props) => (
								<Link to="/join" {...props} />
							)}
						>
							Sign Up
						</Button>
						<Link
							to="/login"
							className="flex items-center justify-center rounded-md bg-blue-500 px-4 py-3 font-medium text-white hover:bg-blue-600"
						>
							Log In
						</Link>
						<MNavLink
							renderRoot={(props) => (
								<NavLink to="/join" {...props}>
									Sign Up
								</NavLink>
							)}
						></MNavLink>
					</Flex>
					<TextInput label="Hello World" description="hi" />
				</Container>
			</AppShell.Main>
		</AppShell>
	);
}
