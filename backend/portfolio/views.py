from django.shortcuts import render
from .models import ArchProjects, CodingProjects, TechSkills, Owner,ArchImages
from rest_framework.views import APIView
from rest_framework.response import Response
from . serializer import ArchSerializer, CodingSerializer


# Create your views here.

# Just to see images that i uploaded to backend
def archProjects(request):
    if request.method == 'GET':
        arc_projects = ArchProjects.objects.all()
        return render(request, 'showArches.html', {'projects': arc_projects})


# ApiView to render my arch projects to react
class ArchProjectsView(APIView):
    serializer_class = ArchSerializer

    def get(self,request):
        detail = [{'id':project.id,'title': project.title, 'description': project.description,
                   'place': project.place, 'image': 'http://127.0.0.1:8000' + project.image.url}
                  for project in ArchProjects.objects.all()]
        return Response(detail)


#This class renders an api with the images that are belong to
#ArchProjectsView class
class ArchDetailView(APIView):

    def get(self,request,id):
        images = []
        text = []
        project = ArchProjects.objects.get(id=id)
        image_list = ArchImages.objects.filter(project=project)
        for image in image_list:
            images.append('http://127.0.0.1:8000'+image.image.url)
            text.append(image.text)
        detail = [{'project':str(project), 'images':images, 'text':text}]

        return Response(detail)


# ApiView to render my coding projects
class CodingProjectsView(APIView):
    serializer_class = CodingSerializer

    def get(self, request):
        detail = [{'title':project.title, 'description':project.description,
                   'image':'http://127.0.0.1:8000'+project.image.url}
                  for project in CodingProjects.objects.all()]
        return Response(detail)



# This class takes the information from TecSkills model and takes the
# owner of the skill then returns information about the both models
class AboutMeView(APIView):

    def get(self,request):
        detail = []

        for skill in TechSkills.objects.all():
            person = Owner.objects.get(techskills=skill)
            detail.append({'person_name':str(person),
                          'id':skill.id,
                          'skill':skill.techSkill,
                          'skill_range':skill.techSkillRange,
                          'first_name':person.first_name,
                          'last_name':person.last_name,
                          'email':person.email, 'text':person.aboutMeText,
                          'image':'http://127.0.0.1:8000'+person.image.url})

        return Response(detail)

