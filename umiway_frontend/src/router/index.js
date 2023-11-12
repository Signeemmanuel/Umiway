import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignUpView from "@/views/SignUpView.vue";
import LoginView from "@/views/LoginView.vue";
import FeedView from "@/views/FeedView.vue";
import MessageView from "@/views/MessageView.vue";
import SearchView from "@/views/SearchView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/signup",
			name: "signup",
			component: SignUpView,
		},
		{
			path: "/login",
			name: "login",
			component: LoginView,
		},
		{
			path: "/feed",
			name: "feed",
			component: FeedView,
		},
		{
			path: "/message",
			name: "message",
			component: MessageView,
		},
		{
			path: "/search",
			name: "search",
			component: SearchView
		},
		
	],
});

export default router;
