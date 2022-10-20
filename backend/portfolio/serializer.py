from rest_framework import serializers
from . models import ArchProjects, CodingProjects


class ArchSerializer(serializers.ModelSerializer):
    class Meta():
        model = ArchProjects
        fields = ('title', 'description', 'place', 'image')

class CodingSerializer(serializers.ModelSerializer):
    class Meta():
        model=CodingProjects
        fields = ('title', 'description', 'image')