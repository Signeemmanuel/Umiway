<script setup>
import feedImage from "@/assets/feed_image.jpg";
import IconLike from "@/components/icons/IconLike.vue";
import IconComment from "@/components/icons/IconComment.vue";
import IconMore from "@/components/icons/IconMore.vue";
import PeopleYouMayKnow from  "@/components/PeopleYouMayKnow.vue"
import Trends from '../components/Trends.vue'
</script>

<template>
   <div class="max-w-7xl mx-auto grid grid-cols-4 gap-4">
      <div class="main-left col-span-1">
         <div
            class="p-4 mt-6 bg-white border border-gray-200 text-center rounded-lg">
            <img
               src="https://i.pravatar.cc/300?img=70"
               class="mb-6 rounded-full" />
            <p><strong>Code with Josue</strong></p>
            <div class="mt-6 flex space-x-0 justify-around">
               <p class="text-xs text-gray-500">182 friends</p>
               <p class="text-xs text-gray-500">182 posts</p>
            </div>
         </div>
      </div>

      <div class="main-center col-span-2 space-y-4">
         <div
            class="p-4 mt-6 bg-white border border-gray-200 text-center rounded-lg space-y-5">
            <textarea
               class="p-4 bg-gray-100 w-full rounded-lg"
               name="feed"
               id="feed"
               placeholder="what is your are you thinking about"></textarea>

            <div
               class="p-4 bg-white border border-gray-100 flex justify-between">
               <a
                  href="#"
                  class="inline-block py-4 px-6 bg-purple-600 text-white rounded-lg"
                  >Attach</a
               >
               <a
                  href="#"
                  class="inline-block py-4 px-6 bg-purple-600 text-white rounded-lg"
                  >Post</a
               >
            </div>
         </div>

         <div class="p-4 bg-white border border-gray-200 rounded-lg">
            <div class="mb-6 flex items-center justify-between">
               <div class="flex items-center space-x-6">
                  <img
                     src="https://i.pravatar.cc/300?img=70"
                     class="w-[40px] rounded-full" />
                  <p><strong>Code with Josue</strong></p>
               </div>
               <p>18 minutes ago</p>
            </div>

            <img :src="feedImage" class="w-full rounded-lg" />

            <div class="my-6 flex justify-between">
               <div class="flex space-x-6">
                  <div class="flex items-center space-x-2">
                     <IconLike />
                     <span>82 likes</span>
                  </div>
                  <div class="flex items-center space-x-2">
                     <IconComment />
                     <span>8 comments</span>
                  </div>
               </div>
               <div><IconMore /></div>
            </div>
         </div>

         <div class="p-4 bg-white border border-gray-200 rounded-lg">
            <div class="mb-6 flex items-center justify-between">
               <div class="flex items-center space-x-6">
                  <img
                     src="https://i.pravatar.cc/300?img=70"
                     class="w-[40px] rounded-full" />
                  <p><strong>Code with Josue</strong></p>
               </div>
               <p>18 minutes ago</p>
            </div>

            <p>
               lorem adf dlafkn dfalkf flia f alsf flajf alskf asdflk faslkf asf
               aslk saflkn aohf aofih asfih adfoh a ihdfoiuhsdf oih ihsdf oih
               fih aoiuh afiuh aiuh sfioh ioh fih sfih iuh iuh iuhf oiuha aiuha
               iuhf oiuhf ihsf iahf saoihf e98he b b u9he uhff aibf uha sdf
               9uahf ef8e9h w9 f9f 9f8yf09fyawe9y 9f a9fyef uih adsf
            </p>

            <div class="my-6 flex justify-between">
               <div class="flex space-x-6">
                  <div class="flex items-center space-x-2">
                     <IconLike />
                     <span>82 likes</span>
                  </div>
                  <div class="flex items-center space-x-2">
                     <IconComment />
                     <span>8 comments</span>
                  </div>
               </div>
               <div><IconMore /></div>
            </div>
         </div>
      </div>
      <div class="main-right col-span-1 space-y-4">
         <PeopleYouMayKnow />
         <Trends />
      </div>
      
   </div>
</template>
