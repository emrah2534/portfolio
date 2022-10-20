from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register(CodingProjects)
admin.site.register(Owner)
admin.site.register(TechSkills)


# See some examples about StackedInLine admin
# at 'https://soshace.com/upload-multiple-images-to-a-django-model-without-plugins/'
class ArchImageAdmin(admin.StackedInline):
    model = ArchImages

@admin.register(ArchProjects)
class ArchesAdmin(admin.ModelAdmin):
    inlines = [ArchImageAdmin]

    class Meta:
        model = ArchProjects

@admin.register(ArchImages)
class ArcImageAdmin(admin.ModelAdmin):
    pass